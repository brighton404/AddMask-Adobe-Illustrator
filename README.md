# AddMask
## llustrator Mask
A script for Adobe Illustrator (2021 and later) that adds masks to selected objects (vector paths or images) especially when working with complex selections.

## Features
Apply Masks to Selected Objects: Masks each selected object or image, whether embedded, linked, or directly pasted into the file.

## Requirements
Adobe Illustrator (2021 or later) with JavaScript scripting enabled.
Selected Objects: The script requires objects to be selected before running, including vector shapes, embedded images, and placed (linked) images.

## Installation
1. Download the Script: Save the script file as `AddMask.jsx.`
2. Place the Script: Copy the file to your Illustrator Scripts folder. The location is typically:
    Windows: `C:\Program Files\Adobe\Adobe Illustrator <version>\Presets\<language>\Scripts`
    MacOS: `/Applications/Adobe Illustrator <version>/Presets/<language>/Scripts`
3. Restart Illustrator: If Illustrator is open, restart it to load the new script.
4. Access the Script: In Illustrator, go to File > Scripts and select AddMask.

## Usage
1. Select Objects: In Illustrator, select the objects or images you want to mask.
2. Run the Script: Open the script via File > Scripts > AddMask.

### Code Details
Mask Creation: The script groups each selected object with a rectangle of the same size and sets it as a clipping mask.

### Notes
Important: Ensure that objects are selected before running the script. The script will prompt an alert if no objects are selected.
Test Compatibility: This script was tested on Illustrator 2021. Other versions may vary in support for certain functions.
This script is provided as-is, free to use and modify. It is intended for creative projects and workflow efficiency in Adobe Illustrator. Use at your own discretion.


