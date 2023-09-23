from math import radians, cos, sin, asin, sqrt

def haversine(lat1, lon1, lat2, lon2):
    lat1, lon1, lat2, lon2 = map(radians, [lat1, lon1, lat2, lon2])

    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a))
    r = 6371  
    
    distance = c * r
    return distance

def find_nearest_land_location(latitude, longitude, locations):

    nearest_location = None
    nearest_distance = float('inf')

    for location in locations:
        loc_lat, loc_lon = location['latitude'], location['longitude']
        distance = haversine(latitude, longitude, loc_lat, loc_lon)

        if distance < nearest_distance:
            nearest_distance = distance
            nearest_location = (loc_lat, loc_lon)

    return nearest_location, nearest_distance

if __name__ == '__main__':
    latitude = 37.7749
    longitude = -122.4194
    locations = [
        {'name': 'Location 1', 'latitude': 38.9072, 'longitude': -77.0369},
        {'name': 'Location 2', 'latitude': 34.0522, 'longitude': -118.2437},
        {'name': 'Location 3', 'latitude': 40.7128, 'longitude': -74.0060},

    ]

    nearest_location, nearest_distance = find_nearest_land_location(latitude, longitude, locations)

    print("Nearest Location:")
    print("Latitude:", nearest_location[0])
    print("Longitude:", nearest_location[1])
    print("Distance:", nearest_distance, "kilometers")