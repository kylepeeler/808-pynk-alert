# before running, make sure you have Pillow installed
# pip install Pillow
from PIL import Image

# Create a pink square image (favicon size is typically 16x16)
favicon_size = (16, 16)
pynk_color = (255, 25, 135) #ff1987
green_color = (128, 205, 84) #80cd54

# Create the image
faviconpynk = Image.new("RGB", favicon_size, pynk_color)
favicongreen = Image.new("RGB", favicon_size, green_color)


# Save as .ico file
faviconpynk.save("../public/favicon.ico", format="ICO")
favicongreen.save("../public/favicongreen.ico", format="ICO")
