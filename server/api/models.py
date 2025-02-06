from django.db import models
import random
import string

def generate_room_code():
    length = 6
    while True:
        code = ''.join(random.choices(string.ascii_uppercase, k=length))
        if not Room.objects.filter(room_code=code).exists():
            break
    return code

# Create your models here.
class Room(models.Model):
    name = models.CharField(max_length=255)
    max_players = models.IntegerField()
    rounds = models.IntegerField()
    guess_time = models.IntegerField()
    room_code = models.CharField(max_length=6, unique=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.room_code:
            self.room_code = generate_room_code()  # Generate the room code if not already set
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
    