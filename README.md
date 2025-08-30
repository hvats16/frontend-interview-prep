# GoodFuel.Life - Health Food Delivery Website

A modern, responsive website for ordering healthy meals with integrated delivery charge calculation based on distance.

## Features

- **Product Catalog**: Browse healthy meal options with size variants
- **Shopping Cart**: Add items, adjust quantities, and manage cart
- **Delivery Charge Calculation**: Automatic delivery charge calculation based on distance
- **WhatsApp Integration**: Direct order placement via WhatsApp
- **Cash on Delivery**: COD option with customer details form
- **Responsive Design**: Mobile-friendly interface

## Delivery Charge System

- **Rate**: ₹10 per kilometer
- **Maximum Range**: 15 kilometers from shop location
- **Shop Location**: Dwarka Sector 7, New Delhi (28.58517294897767, 77.07168929283343)
- **Automatic Calculation**: Uses browser's Geolocation API to get user's current location
- **Distance Formula**: Haversine formula for accurate straight-line distance calculation

## Setup Instructions

### 1. Browser Geolocation Support

The delivery charge system now uses the browser's built-in Geolocation API, which means:

- **No API keys required** - Uses native browser functionality
- **Automatic location detection** - User clicks button to get current location
- **Privacy-friendly** - User must explicitly grant location permission
- **Works offline** - No external API calls needed for distance calculation

### 2. Location Permissions

Users will need to grant location access:
- **First time**: Browser will prompt for location permission
- **Permission denied**: User will see helpful error message
- **High accuracy**: System requests most accurate location available

### 3. Testing

1. Open `index.html` in a web browser
2. Add items to cart
3. Click "Use Current Location" button
4. Grant location permission when prompted
5. Wait for automatic distance calculation
6. Check delivery charge calculation
7. Proceed with order

## How It Works

1. **Location Request**: User clicks "Use Current Location" button
2. **Permission Grant**: Browser requests location access permission
3. **Coordinate Retrieval**: Gets user's current latitude and longitude
4. **Distance Calculation**: Uses Haversine formula to calculate straight-line distance
5. **Charge Calculation**: Applies ₹10/km rate (max 15km)
6. **Validation**: Prevents orders beyond delivery range
7. **Order Processing**: Includes delivery charge in final total

## File Structure

```
frontend-prep/
├── index.html          # Main website file
├── README.md           # This file
└── 1-javascript-interview/  # JavaScript practice files
```

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Notes

- Delivery charge is calculated automatically using user's current location
- No external API calls required - works completely offline
- Maximum delivery distance is enforced at checkout
- All prices are in Indian Rupees (₹)
- Location permission is required for delivery charge calculation

## Support

For technical support or questions about the delivery charge system, please refer to the Google Maps API documentation or contact the development team.