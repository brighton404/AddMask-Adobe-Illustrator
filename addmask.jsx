// Function to create a mask for each selected object or image
function createMaskForSelection() {
    var doc = app.activeDocument;
    var selection = doc.selection;

    if (selection.length === 0) {
        alert("No objects selected. Please select objects or images to apply a mask.");
        return;
    }

    for (var i = 0; i < selection.length; i++) {
        var selectedItem = selection[i];

        // Check if it's an image (RasterItem), Linked or Embedded
        if (selectedItem.typename === "PlacedItem" || selectedItem.typename === "RasterItem") {
            createMaskForImage(selectedItem);
        } 
        // Check if it's a regular vector object
        else if (selectedItem.typename === "PathItem") {
            createMaskForVectorObject(selectedItem);
        }
    }
}

// Function to create a mask for an image
function createMaskForImage(item) {
    var doc = app.activeDocument;

    // Create a rectangle with the same dimensions as the image
    var rect = doc.pathItems.rectangle(item.top, item.left, item.width, item.height);

    // Group the image and the rectangle together
    var group = doc.groupItems.add();
    item.moveToBeginning(group);
    rect.moveToBeginning(group);

    // Set the rectangle as a clipping mask
    rect.clipping = true;
    group.clipped = true;
}

// Function to create a mask for vector objects
function createMaskForVectorObject(item) {
    var doc = app.activeDocument;

    // Get the bounding box of the vector object
    var bounds = item.visibleBounds;
    var top = bounds[1];
    var left = bounds[0];
    var width = bounds[2] - bounds[0];
    var height = bounds[1] - bounds[3];

    // Create a rectangle with the same dimensions as the vector object
    var rect = doc.pathItems.rectangle(top, left, width, height);

    // Group the vector object and the rectangle together
    var group = doc.groupItems.add();
    item.moveToBeginning(group);
    rect.moveToBeginning(group);

    // Set the rectangle as a clipping mask
    rect.clipping = true;
    group.clipped = true;
}

// Run the script
createMaskForSelection();
