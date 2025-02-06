from rest_framework import serializers
from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = ['id', 'name', 'max_players', 'rounds', 'guess_time', 'room_code', 'created_at']
