<!DOCTYPE html>
<html>
  <head>
    <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.4.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <meta charset="utf-8">
    <title>Download SVG</title>

    <style>
      .download-button{
        font-size: 32em;
        text-align: center;
      }
      .download-button i {
        cursor: pointer;
      }

    </style>

  </head>
  <body>

  <?php
    define('URL_SVG', 'https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg');
    function imageEncode($img){ 
        $image = file_get_contents($img); 
        $type = pathinfo($img, PATHINFO_EXTENSION); 
        $src = 'data:image/'. $type .';base64,'. base64_encode($image); 
        return $src; 
    }
    ?>
<?php echo imageEncode(URL_SVG);?>
    <script>
      var dataURL = "data:image/svg;base64,77u/PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjkwMCIgIGhlaWdodD0iNjAwIiB2aWV3Qm94PSIwIDAgMzAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj4NCjxyZWN0IHdpZHRoPSIzMCIgaGVpZ2h0PSIyMCIgZmlsbD0iI2RhMjUxZCIvPg0KPHBvbHlnb24gcG9pbnRzPSIxNSw0IDExLjQ3LDE0Ljg1IDIwLjcxLDguMTUgOS4yOSw4LjE1IDE4LjUzLDE0Ljg1IiBmaWxsPSIjZmYwIi8+DQo8L3N2Zz4NCg==";

      // A data URL can also be generated from an existing SVG element.
      // function svgDataURL(svg) {
      //   var svgAsXML = (new XMLSerializer).serializeToString(svg);
      //   return "data:image/svg+xml," + encodeURIComponent(svgAsXML);
      // }

      function download(){
        var dl = document.createElement("a");
        document.body.appendChild(dl); // This line makes it work in Firefox.
        dl.setAttribute("href", dataURL);
        dl.setAttribute("download", "test.svg");
        dl.click();
      }

    </script>
      
    <div class="download-button" onclick="download()" title="Download as SVG file.">
      <img src="<?php echo URL_SVG ?>" alt="">
    </div>

  </body>
</html> 