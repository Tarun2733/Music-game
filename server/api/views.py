from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Room
from .serializers import RoomSerializer

@api_view(['GET'])
def get_rooms(request):
    if request.method == 'GET':
        rooms = Room.objects.all()
        serializer = RoomSerializer(rooms, many=True)
        return Response(serializer.data)

@api_view(['POST'])
def create_room(request):
    if request.method == 'POST':
        serializer = RoomSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  # Save the room and generate a room code
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def join_room(request):
    room_code = request.data.get('room_code')  # Get the room code from the request

    if not room_code:
        return Response({"error": "Room code is required"}, status=status.HTTP_400_BAD_REQUEST)

    # Check if the room exists in the database
    try:
        room = Room.objects.get(room_code=room_code)
        return Response({"message": "Successfully joined the room", "room_code": room.room_code}, status=status.HTTP_200_OK)
    except Room.DoesNotExist:
        return Response({"error": "Invalid room code"}, status=status.HTTP_404_NOT_FOUND)