from PIL import Image
import numpy as np
from skimage import filters, morphology
import matplotlib.pyplot as plt
import sys

def process_image(image_path):
    
    img = Image.open(image_path).convert('L')
    
    # Convert image to numpy array
    data = np.array(img)
    
    # Use a median filter to reduce noise
    median_filtered = filters.median(data, morphology.disk(1))
    
    isolated_lines = np.zeros_like(median_filtered)
    isolated_lines[median_filtered < 128] = 255
    
    inverted_isolated_lines = np.invert(isolated_lines)

    output_path = 'processed_EKG.png'
    Image.fromarray(inverted_isolated_lines).save(output_path)

    return(output_path)


if len(sys.argv) < 2:
    print("Usage: python script.py <path_to_image>")
    sys.exit(1)

image_path = sys.argv[1]
result = process_image(image_path)
print(result)  # Node.js will capture this output

