from flask import (Flask, render_template, request)

app = Flask(__name__, template_folder="templates")


@app.route('/')
def index():
    return render_template('index.html')
@app.route('/graph.html')
def graph():
    return render_template('graph.html')
@app.route('/map.html')
def maps():
    return render_template('map.html')


if __name__ == '__main__':
    app.run(debug=True)    


