#!/usr/bin/env python
import asyncio
import datetime
import random
import websockets

async def time(websocket, path):
    try:
        while True:
            hours = datetime.datetime.now().strftime("%H")
            minuts = datetime.datetime.now().strftime("%M")
            seconds = datetime.datetime.now().strftime("%S")
            await websocket.send(hours + minuts + seconds)
            await asyncio.sleep(1)
    except Exception as e:
        print(e)
        

start_server = websockets.serve(time, '127.0.0.1', 5678)

asyncio.get_event_loop().run_until_complete(start_server)
print('server started on: ip '+' 127.0.0.1 and port',5678)
asyncio.get_event_loop().run_forever()
