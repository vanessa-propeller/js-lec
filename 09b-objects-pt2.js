// Let's apply this to the PQ options so we can relate better HAHAHA
let pqOptions = {
  photos_count: 231, // this is a number
  propeller_ppk: true, // this is a boolean
  requested_regions: ["us-west-1"],
  point_cloud_density: "medium", // this is a string
  drone_serial_numbers: ["493OK1E8AA02W5"],
  precise_geotags_file: "ob6e6b04e5",
  ground_control_points: {
    // crs key contains the vertical and horizontal objects
    crs: {
      vertical: { id: "4955", unit: 9001, authority: "EPSG" },
      horizontal: { id: "2956", unit: 9001, authority: "EPSG" },
    },

    // This is an array [] of coordinates
    coordinates: [
      {
        x: 321411.8882709285,
        y: 5813418.331416122,
        z: 908.9325,
        name: "acfbddba9d",
        type: 2,
        purpose: "gcp",
        x_variance: 0.00412,
        y_variance: 0.00204,
        z_variance: 0.0072,
        is_low_quality: false,
      },
    ],
    crs_definition: {
      wkt: 'PROJCS["NAD83(CSRS) / UTM zone 12N",GEOGCS["NAD83(CSRS)",DATUM["NAD83_Canadian_Spatial_Reference_System",SPHEROID["GRS 1980",6378137,298.257222101],TOWGS84[0,0,0,0,0,0,0]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree (supplier to define representation)",0.017453292519943278,AUTHORITY["EPSG","9122"]]],PROJECTION["Transverse_Mercator"],PARAMETER["scale_factor",0.9996],PARAMETER["latitude_of_origin",0],PARAMETER["central_meridian",-111],PARAMETER["false_easting",500000],PARAMETER["false_northing",0],UNIT["metre",1,AUTHORITY["EPSG","9001"]],AXIS["Easting",EAST],AXIS["Northing",NORTH]]',
    },
  },
  source_file_gigapixels: 4.8251,
  largest_photo_megapixels: "20.8876800000",
};

console.log(pqOptions.photos_count);
console.log(pqOptions.precise_geotags_file);
console.log(pqOptions.ground_control_points.coordinates);
console.log(pqOptions.ground_control_points.crs_definition.wkt);

// Check if a certain property exists in an object
// Let's check if the QA setting exists in the pqOptions object
console.log("accuracy_grade" in pqOptions); // prints false
console.log("source_file_gigapixels" in pqOptions); // prints true

// So, as you can see, objects can contain all sorts of properties: strings, numbers, booleans, functions
// Objects can even contain objects
