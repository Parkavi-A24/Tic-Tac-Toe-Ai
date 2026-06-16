from flask import Flask, request, jsonify
from flask_cors import CORS
from minimax import best_move

app = Flask(__name__)
CORS(app)

@app.route('/move', methods=['POST'])
def move():

    data = request.json
    board = data['board']

    ai_position = best_move(board)

    return jsonify({
        "position": ai_position
    })

if __name__ == '__main__':
    app.run(debug=True)
