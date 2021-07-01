// Upload a folder containing images
const uploadedFolder = document.querySelector("#upload")

// Look inside the uploadedFolder
uploadedFolder.addEventListener('change', () => {
    
  // convert FileList into Array to use forEach
  const imagesArray = Array.from(uploadedFolder.files)
  
  
// Filter images according to resolution  
  // forEach element in imagesArray find the resolution of the image (not done)
  // take advantage that the resolution of the image is in its name (generalize later)
  const filteredImgArr = imagesArray.filter(image => image.name.includes('2048'))
  

// Remove duplicate images (NOT DOING THIS)

// Get 20 random images out of filteredImgArr and put them in finalImgArr
  const finalImgArr = []
  
  //get 1 random index, 20 times
  for (let i = 0; i < 20; i++) {
    const index = getRandomInt(0, filteredImgArr.length) // mini = inclusive, max = exclusive
    finalImgArr.push(filteredImgArr[index])
  }

  // Create a folder using JSZip
  const zip = new JSZip()
  const photoZip = zip.folder("Processed Images")
  
  // For each image in finalImgArr
  finalImgArr.forEach(img => photoZip.file(img.name, img))
  // Organize images in file structure \
  
    // resize into ads platform sizes
    // 1200 x 628, 1200 x 1200, 960 x 1200, 1333 x 1000, 1500 x 1000, 1778 x 1000, 1200 x 1000
  
  
  
  // and zip the folder for download
  zip.generateAsync({ type: "blob" }).then(function (content) {
    saveAs(content, "ProcessedImages.zip")
  })

})

//Helpers
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const sayMyName = () => {
  return "ernesto"
}
