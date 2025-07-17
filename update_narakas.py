#!/usr/bin/env python3
import re
import sys

def update_avoidance_arrays(content):
    """Update all avoidance arrays from simple arrays to translated objects"""
    
    # Pattern to match avoidance arrays
    pattern = r'(\s+)avoidance: \[\s*\n((?:\s+"[^"]*",?\s*\n)*)\s+\],'
    
    def replace_avoidance(match):
        indent = match.group(1)
        items_text = match.group(2)
        
        # Extract individual items
        items = re.findall(r'"([^"]*)"', items_text)
        
        if not items:
            return match.group(0)  # Return original if no items found
        
        # Create the new structure
        result = f'{indent}avoidance: {{\n'
        result += f'{indent}  en: [\n'
        for item in items:
            result += f'{indent}    "{item}",\n'
        result += f'{indent}  ],\n'
        result += f'{indent}  hi: [\n'
        for item in items:
            result += f'{indent}    "TODO_HI: {item}",\n'
        result += f'{indent}  ],\n'
        result += f'{indent}  ne: [\n'
        for item in items:
            result += f'{indent}    "TODO_NE: {item}",\n'
        result += f'{indent}  ],\n'
        result += f'{indent}  sa: [\n'
        for item in items:
            result += f'{indent}    "TODO_SA: {item}",\n'
        result += f'{indent}  ],\n'
        result += f'{indent}}},'
        
        return result
    
    return re.sub(pattern, replace_avoidance, content, flags=re.MULTILINE)

def main():
    file_path = 'c:/Users/LENOVO/Downloads/GarudaPunishments-main/app/narakas/[id]/page.tsx'
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        updated_content = update_avoidance_arrays(content)
        
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        
        print("Successfully updated all avoidance arrays!")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()