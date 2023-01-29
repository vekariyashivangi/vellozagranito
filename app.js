document
  .getElementById("tiles-calculate")
  .addEventListener("submit", function (event) {
    event.preventDefault();
  });

function tilesCalculate() {
  // if ($("#tiles-calculate").valid() != true) {
  //   return false;
  // }

  //get length value
  var length = $.trim($("[name='length_m']").val());

  //get Width value
  var width = $.trim($("[name='width_m']").val());

  if ((length != "" && length != null) || (width != "" && width != null)) {
    // get area covered value
    var areaCovered = length * width;

    //get area covered value
    var areaCoveredMeter = length * width + " sq.m.";

    //replace html in area covered
    $(".area-covered").html(areaCoveredMeter);

    // get value sqmtr pcs
    var sqmtr_pcs = $("[name='select_tiles_size']")
      .children("option:selected")
      .attr("sqmtr-pcs");

    // get value of  pcs in box
    var pcs_in_box = $("[name='select_tiles_size']")
      .children("option:selected")
      .attr("data-per-pcs-value");

    if (
      (sqmtr_pcs != "" && sqmtr_pcs != null) ||
      (pcs_in_box != "" && pcs_in_box != null)
    ) {
      // get value of per box of sqm
      var per_box_sqm = sqmtr_pcs * pcs_in_box;

      if (
        (areaCovered != "" && areaCovered != null) ||
        (sqmtr_pcs != "" && sqmtr_pcs != null)
      ) {
        // get value no of tiles
        var no_of_titles = Math.ceil(areaCovered / sqmtr_pcs);

        // replace html of No. of Tiles
        $(".no-of-titles").html(no_of_titles);
      }

      if (
        (no_of_titles != "" && no_of_titles != null) ||
        (pcs_in_box != "" && pcs_in_box != null)
      ) {
        //get value no of boxes
        var No_of_boxes = Math.ceil(no_of_titles / pcs_in_box);

        //replace html of No. of Boxes
        $(".no-of-boxes").html(No_of_boxes);
      }
    }
  }
}
