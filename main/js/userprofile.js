// wishlist button toggle
$(document).ready(function () {
  $("button").on("click", function () {
    $(this).toggleClass("active");
  });
});
// raty plugin
$(".HandMade_jewelry_rating").raty({
  starType: "i",
  half: true,
  readOnly: true,
  precision: true,
  score: 4.5,
  number: 5,
  target: "#hint",
  targetType: "score",
  targetKeep: true,
  round: { down: 0.25, full: 0.7, up: 1 },
});
$(".listing_rating").raty({
  starType: "i",
  half: true,
  precision: true,
  // change target type and make a review item function

  score: function () {
    return $(this).attr("data-score");
  },
  readOnly: true,
  // score: 5,
  number: 5,
  space: 1,
  target: "#listing_score",
  targetType: "score",
  targetKeep: true,
  // round: { down: 0.25, full: 0.5 },
});
//

// select menu
(function ($) {
  $.fn.RevSelectBox = function () {
    this.each(function () {
      var $this = $(this),
        numberOfOptions = $(this).children("option").length;

      $this.addClass("select-hidden");

      if (!$this.parent().hasClass("rev-select")) {
        $this.wrap('<div class="rev-select"></div>');
      }
      $this.closest(".rev-select").find(".select-styled").remove();
      $this.closest(".rev-select").find(".select-options").remove();

      $this.after('<div class="select-styled"></div>');

      var $styledSelect = $this.next("div.select-styled");
      if ($this.find("option:selected")) {
        $styledSelect.text($this.find("option:selected").text());
      } else {
        $styledSelect.text($this.children("option").eq(0).text());
      }

      var $list = $("<ul />", {
        class: "select-options",
      }).insertAfter($styledSelect);

      for (var i = 0; i < numberOfOptions; i++) {
        $("<li />", {
          text: $this.children("option").eq(i).text(),
          rel: $this.children("option").eq(i).val(),
        }).appendTo($list);
      }

      var $listItems = $list.children("li");

      $styledSelect.click(function (e) {
        e.stopPropagation();
        $("div.select-styled.active")
          .not(this)
          .each(function () {
            $(this).removeClass("active").next("ul.select-options").hide();
          });
        $(this).toggleClass("active").next("ul.select-options").toggle();
      });

      $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass("active");
        $this.val($(this).attr("rel")).trigger("change");
        $list.hide();
        //console.log($this.val());
      });

      $this.change(function (e) {
        // e.stopPropagation();
        $styledSelect.text($this.find("option:selected").text());
      });

      $(document).click(function () {
        $styledSelect.removeClass("active");
        $list.hide();
      });
    });
  };
})(jQuery);

jQuery(".rev-select-box").RevSelectBox();
jQuery("select").RevSelectBox();

// table into card on mobile
if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments;
    if (typeof args[0] === typeof {}) args = args[0];
    var result = this;
    $.each(args, (name, value) => {
      result = result.replace("{" + name + "}", value);
    });
    return result;
  };
}

class MergeModel {
  constructor(name) {
    this.name = name;
    this.patterns = [];
  }

  merge(data) {
    if (typeof data !== typeof {})
      throw new TypeError("You must use a dictionary!");

    var masterPattern = "";
    this.patterns.forEach((p) => (masterPattern += p));
    masterPattern = masterPattern
      .replace(/\./g, ".")
      .replace(/\,/g, ",")
      .replace(/\\/g, "\\");
    return masterPattern.format(data);
  }
}

class TableHeader {
  constructor(
    name,
    isTitle,
    isSubtitle,
    isFooter,
    isActionLinks,
    footerPattern = undefined,
    mergeModel = undefined
  ) {
    this.name = name;
    this.isTitle = isTitle;
    this.isSubtitle = isSubtitle;
    this.isFooter = isFooter;
    this.isActionLinks = isActionLinks;
    this.footerPattern = footerPattern;
    this.mergeModel = mergeModel;
  }
}

function tableToCards() {
  $("table.table").each(function (j, table) {
    if (table.hasAttribute("data-card-ignore")) return;

    const tableId = $(this).attr("id");
    if (tableId === undefined) {
      console.error("All tables need an ID for tableToCards to work properly!");
    }

    $(`div.table-card-deck#${tableId}`).remove();

    var cardWidth = $(this).attr("data-card-width");
    if (cardWidth === undefined) cardWidth = 566;
    if ($(window).width() > cardWidth) {
      $(this).show();
      return;
    }

    var headers = [];
    var mergeModels = {};

    // Parse merge models
    $(this)
      .find("thead tr th")
      .each((i, th) => {
        if (
          !th.hasAttribute("data-card-merge-name") ||
          !th.hasAttribute("data-card-merge-index")
        )
          return;

        var mergeName = $(th).attr("data-card-merge-name"),
          mergeIndex = $(th).attr("data-card-merge-index"),
          mergePattern = $(th).attr("data-card-merge-pattern");

        if (mergePattern === undefined) mergePattern = "{0} ";
        if (mergeModels[mergeName] === undefined)
          mergeModels[mergeName] = new MergeModel(mergeName);

        mergePattern = mergePattern.replace(
          /\{0\}/g,
          "{" + th.innerHTML.replace(/\s/g, "_") + "}"
        );
        mergeModels[mergeName].patterns[mergeIndex] = mergePattern;
      });

    // Parse headers
    $(this)
      .find("thead tr th")
      .each((i, th) => {
        headers.push(
          new TableHeader(
            th.innerHTML.replace(/(^\s+|\s+$)/g, ""),
            th.hasAttribute("data-card-title"),
            th.hasAttribute("data-card-subtitle"),
            th.hasAttribute("data-card-footer"),
            th.hasAttribute("data-card-action-links"),
            $(th).attr("data-card-footer-pattern"),
            mergeModels[$(th).attr("data-card-merge-name")]
          )
        );
      });

    // Generate cards
    var cards = [];
    $(this)
      .find("tbody tr")
      .each(function () {
        var cardTitle = $("<h5>").addClass("card-title");
        var cardSubtitles = [];
        var cardText = $("<p>").addClass("card-text");
        var cardFooters = $("<div>").addClass("card-footer text-muted");
        var actionLinks = [];

        var appliedFormats = [];
        var rowData = {};

        $(this)
          .children("td")
          .each(
            (i, td) =>
              (rowData[headers[i].name.replace(/\s/g, "_")] =
                td.innerHTML.replace(/(^\s+|\s+$)/g, ""))
          );

        $(this)
          .children("td")
          .each(function (i, td) {
            var header = headers[i];
            if (header.isActionLinks) {
              // Action links
              $(this)
                .find("a")
                .each((i, a) =>
                  actionLinks.push(
                    $("<a>")
                      .addClass("card-link")
                      .html(a.innerHTML)
                      .attr("href", $(a).attr("href"))
                  )
                );
              return;
            }
            if (header.isTitle) {
              // Title field
              cardTitle.html(td.innerHTML);
              return;
            }
            if (header.isSubtitle) {
              // Subtitle field
              cardSubtitles.push(
                $("<h6>")
                  .addClass("card-subtitle mb-2 text-muted")
                  .html(td.innerHTML)
              );
              return;
            }
            if (header.isFooter) {
              //Footer field
              let pattern = headers[i].footerPattern;
              if (pattern === undefined) pattern = "{0}";

              cardFooters.append(
                $("<span>").html(
                  pattern.format(td.innerHTML, headers[i].name) + " "
                )
              );
              return;
            }
            if (header.mergeModel === undefined) {
              // Data field without merge
              cardText.append(
                $("<span>")
                  .append($("<b>").html(header.name + ": "))
                  .append(td.innerHTML)
                  .append($("<br>"))
              );
            } else {
              // Formatted data field
              if (appliedFormats.indexOf(header.mergeModel.name) === -1) {
                // Format not yet applied -> do so now
                cardText.append(
                  $("<span>")
                    .append($("<b>").html(header.mergeModel.name + ": "))
                    .append(header.mergeModel.merge(rowData))
                    .append("<br>")
                );
                appliedFormats.push(header.mergeModel.name);
              }
            }
          });

        if (cardTitle.html() === "") cardTitle = undefined;
        if (cardFooters.html() === "") cardFooters = undefined;

        cards.push(
          $("<div>")
            .addClass("card mb-3")
            .append(
              $("<div>")
                .addClass("card-body")
                .append(cardTitle)
                .append(cardSubtitles)
                .append(cardText)
                .append(actionLinks)
            )
            .append(cardFooters)
        );
      });

    // Instantiate cards, hide table
    var cardWrapper = $("<div>")
      .addClass("table-card-deck")
      .attr("id", tableId);
    cards.forEach((card) => {
      cardWrapper.append(card);
    });

    $(this).parent().append(cardWrapper);
    $(this).hide();
  });
}

$(window).resize(tableToCards);
$(window).ready(tableToCards);
