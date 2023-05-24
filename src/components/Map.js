import React from "react";
import '../styles/Map.css'
function Map() {
  return (
    <div class="mapouter">
      <div class="gmap_canvas">
        <iframe
          class="gmap_iframe"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=644&amp;height=369&amp;hl=en&amp;q=Bangalore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        {/* <a href="https://capcuttemplate.org/">Capcuttemplate.org</a> */}
      </div>
    </div>
  );
}

export default Map;



