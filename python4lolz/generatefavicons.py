# before running, make sure you have Pillow installed
# pip install Pillow
from PIL import Image

# Create a pink square image (favicon size is typically 16x16)
favicon_size = (16, 16)
pynk_color = (255, 25, 135)  # ff1987
infrared_color = (128, 205, 84)  # CC0808

# Create the image
faviconpynk = Image.new("RGB", favicon_size, pynk_color)
faviconred = Image.new("RGB", favicon_size, infrared_color)


# Save as .ico file
faviconpynk.save("../public/favicon.ico", format="ICO")
faviconred.save("../public/faviconred.ico", format="ICO")
