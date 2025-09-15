#!/usr/bin/env python3
"""
Script to fix relative paths in teoria HTML files for GitHub Pages deployment.
"""

import os
import re
import glob

def fix_html_file(file_path):
    """Fix relative paths in an HTML file."""
    print(f"Fixing {file_path}")
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Get the filename without extension to determine the prefix
    filename = os.path.basename(file_path)
    prefix = filename.replace('.html', '')
    
    # Fix relative paths for CSS files
    content = re.sub(
        rf'href="({prefix}_files/[^"]*\.css)"',
        rf'href="/dca-gii/diapositivas/teoria/\1"',
        content
    )
    
    content = re.sub(
        r'href="\.\./styles/([^"]*\.css)"',
        r'href="/dca-gii/diapositivas/styles/\1"',
        content
    )
    
    # Fix relative paths for JavaScript files
    content = re.sub(
        rf'src="({prefix}_files/[^"]*\.js)"',
        rf'src="/dca-gii/diapositivas/teoria/\1"',
        content
    )
    
    content = re.sub(
        r'src="\.\./scripts/([^"]*\.js)"',
        r'src="/dca-gii/diapositivas/scripts/\1"',
        content
    )
    
    content = re.sub(
        r'src="\.\./components/([^"]*\.js)"',
        r'src="/dca-gii/diapositivas/components/\1"',
        content
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

def main():
    """Main function to fix all HTML files."""
    # Find all main HTML files in teoria directory
    teoria_dir = "public/diapositivas/teoria"
    
    # Get all HTML files that are not in _files subdirectories
    html_files = []
    for root, dirs, files in os.walk(teoria_dir):
        # Skip _files directories
        dirs[:] = [d for d in dirs if not d.endswith('_files')]
        for file in files:
            if file.endswith('.html'):
                html_files.append(os.path.join(root, file))
    
    # Filter out speaker-view.html files
    main_html_files = [f for f in html_files if not f.endswith('speaker-view.html')]
    
    print(f"Found {len(main_html_files)} HTML files to fix:")
    for file in main_html_files:
        print(f"  - {file}")
    
    # Fix each file
    for file_path in main_html_files:
        fix_html_file(file_path)
    
    print("All files have been fixed!")

if __name__ == "__main__":
    main()
