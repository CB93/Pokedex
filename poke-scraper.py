import requests,time,json
import pandas as pd

response = requests.get("https://pokeapi.co/api/v2/pokemon/")
#808 pokemon

url = "https://pokeapi.co/api/v2/pokemon/"
#Create a DataFrame object
# dfObj = pd.DataFrame(columns = ['Name' , 'Age', 'City' , 'Country'], index=False) 
for i in range(1,152,1):
    response = requests.get(url + str(i))
    

    if i % 100 == 0:
        print(i)
        time.sleep(70)
   
   
def getAbilities():
    abilities = []
    for line in response.json()['abilities']:
        abilities.append(line['ability']['name'])

    return [abilities]

def getMoves():
    moves = []
    for line in response.json()['moves']:
        moves.append(line['move']['name'])

    return [moves]
    
def getGameindices():
    games = []
    for line in response.json()['game_indices']:
        games.append(line['version']['name'])

    return [games]

def getStats():
    stats = []
    for line in response.json()['stats']:
        temp = []
        temp.append(line['stat']['name'])
        temp.append(line['base_stat'])
        stats.append(temp)

    return [stats]

def getName():
    return response.json()['name']

def getId():
    return response.json()['id']

def getHeight():
    return response.json()['height']

def getWeight():
    return response.json()['weight']


df = pd.DataFrame({
    'name': getName(),
    'id': getId(),
    'abilities': getAbilities(),
    'height': getHeight(),
    'weight': getWeight(),
    'stats': getStats(),
    'games': getGameindices(),
    'moves': getMoves()
})


df.to_csv('data.csv', index=False)
print("All done")