
getKetcher = function() {
  var ketcherFrame = document.getElementById("ifKetcher");
  
  if (ketcherFrame && ("contentDocument" in ketcherFrame))
    return ketcherFrame.contentWindow.ketcher;
  else
    return document.frames['ifKetcher'].window.ketcher;
}

showKetcherModal = function() {
  var ketcher = getKetcher();
  var molfile = $('textarea#common_template_molfile').val();
  ketcher.setMolecule(molfile);
  $('#ketcherModal').modal('show');
}

saveStructure = function() {
  var ketcher = getKetcher();

  var molfile = ketcher.getMolfile();
  var svg = ketcher.getSVG();
  $('textarea#common_template_molfile').html(molfile);
  $('input#svg').val(svg); //set SVG value from the editor
  $('#ketcherModal').modal('hide');
};

updateMolfileFromFileInput = function (e) {
  var file = $('input#common_template_file_molfile').val();
  var reader = new FileReader();
  reader.readAsText(e.files[0]);
  reader.onload = function(e) {
    $('textarea#common_template_molfile').html(e.target.result);
  };
}
