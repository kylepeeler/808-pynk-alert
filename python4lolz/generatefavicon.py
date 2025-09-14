# before running, make sure you have Pillow installed
# pip install Pillow
from PIL import Image

# Create a pink square image (favicon size is typically 16x16)
favicon_size = (16, 16)
pynk_color = (255, 25, 135)  #ff1987 -> rgb(255 25 135)

# Create the image
favicon = Image.new("RGB", favicon_size, pynk_color)

# Save as .ico file
favicon.save("../public/favicon.ico", format="ICO")
