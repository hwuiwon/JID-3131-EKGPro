import cv2
import numpy as np
import matplotlib.pyplot as plt
ECG_image = cv2.imread("/Users/nick/Developer/JD/makiing_EKG/EKGs without PHI/modify.png")
img_gray = cv2.cvtColor(ECG_image, cv2.COLOR_BGR2GRAY)



# Try different values for block size and C to improve the thresholding
block_size = 35  # Must be an odd number
C =  1 # Experiment with different values; this value is subtracted from the mean

adaptive_thresh = cv2.adaptiveThreshold(img_gray, 255, cv2.ADAPTIVE_THRESH_GAUSSIAN_C,
                                        cv2.THRESH_BINARY, block_size, C)

# Experiment with different kernel sizes and shapes
kernel_size = 1  # Try larger sizes if the grid isn't being removed
kernel = np.ones((kernel_size,kernel_size), np.uint8)

# You can also try more iterations of morphological operations
iterations = 20  # Increase iterations if necessary

# Apply morphological operations to clean up the image
# Experiment with operations like `cv2.MORPH_CLOSE` as well
cleaned_image = cv2.morphologyEx(adaptive_thresh, cv2.MORPH_OPEN, kernel, iterations=iterations)

# Display the processed image
plt.figure(figsize=(10,8))
plt.imshow(cleaned_image, cmap='gray')
plt.axis('off')  # Turn off axis numbers and ticks
plt.show()

