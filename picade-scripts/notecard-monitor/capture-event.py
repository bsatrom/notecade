import click
import json
import notecard
from notecard import note
from periphery import I2C
from datetime import datetime
import os

def connectToNotecard():
  port = I2C("/dev/i2c-1")
  ncard = notecard.OpenI2C(port, 0, 0, debug=True)
  print("Notecard connection active...")
  return ncard

@click.command()
@click.option('--event', default='start',
              prompt='Event name',
              help='The type of event to log.')
@click.option('--platform', default='nes',
              prompt='Game platform',
              help='The game platform.')
@click.option('--game', prompt='The game',
              help='The game related to the event.')
def capture_event(event, platform, game):
  ncard = connectToNotecard()
  event_time = str(datetime.utcnow())
  # Get the game name from the path
  # /home/pi/RetroPie/roms/nes/RiverCityRansom.nes
  game_filename = os.path.basename(game)
  game_name = os.path.splitext(game_filename)[0]
  # Strip common special characters from ROM name
  game_name = game_name.replace('(U)', '').replace('[!]', '').strip()

  rsp = note.add(ncard,
    file= "notecade.qo",
    body= {
            "event": event,
            "platform": platform,
            "game": game_name,
            "event_time": event_time
          },
    sync= True)

if __name__ == '__main__':
  capture_event()
