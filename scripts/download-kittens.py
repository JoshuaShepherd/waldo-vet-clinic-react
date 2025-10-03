#!/usr/bin/env python3
"""
Script to download cute kitten images from Unsplash
"""

import requests
import os
from urllib.parse import urlparse
import time

def download_image(url, filename, directory):
    """Download an image from URL and save it to directory"""
    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()
        
        filepath = os.path.join(directory, filename)
        with open(filepath, 'wb') as f:
            for chunk in response.iter_content(chunk_size=8192):
                f.write(chunk)
        
        print(f"Downloaded: {filename}")
        return True
    except Exception as e:
        print(f"Error downloading {filename}: {e}")
        return False

def main():
    # Create directories
    kittens_dir = "public/media/kittens"
    os.makedirs(kittens_dir, exist_ok=True)
    
    # Unsplash kitten images (high quality, cute kittens)
    kitten_urls = [
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop&crop=face", 
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=800&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1596854307809-6e8ce5b0a0b8?w=800&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=800&h=600&fit=crop&crop=face"
    ]
    
    # Download images
    for i, url in enumerate(kitten_urls, 1):
        filename = f"cute-kitten-{i:02d}.jpg"
        download_image(url, filename, kittens_dir)
        time.sleep(1)  # Be respectful to Unsplash
    
    print(f"\nDownloaded {len(kitten_urls)} kitten images to {kittens_dir}/")

if __name__ == "__main__":
    main()
