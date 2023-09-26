from math import radians, cos, sin, asin, sqrt

def haversine_distance(lat1, lon1, lat2, lon2):
        # Calculate the Haversine distance between two points
        r = 6371  # Radius of the Earth in kilometers
        dlat = radians(lat2 - lat1)
        dlon = radians(lon2 - lon1)
        a = sin(dlat/2) ** 2 + cos(radians(lat1)) * cos(radians(lat2)) * sin(dlon/2) ** 2
        c = 2 * asin(sqrt(a))
        distance = r * c
        return distance
if __name__ =='__main__':
    print(haversine_distance(7.1, 33, 7.1, 34))

''' 

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
    print("Distance:", nearest_distance, "kilometers")'''