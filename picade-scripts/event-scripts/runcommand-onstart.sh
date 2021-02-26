# Save Game Stats for Debug
echo $(date)'|'start'|'$1'|'$2'|'$3'|'$4 >> ~/RetroPie/game_stats.log

# Call The Notecard Utility
python3 ~/notecade/capture-event.py --event=start \
  --platform=$1 --game="$3"
