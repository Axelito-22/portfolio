from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/sobre')
def sobre():
    return render_template('sobre.html')


@app.route('/curriculo')
def curriculo():
    return render_template('curriculo.html')


@app.route('/pitch')
def pitch():
    return render_template('pitch.html')


@app.route('/estudos')
def estudos():
    return render_template('estudos.html')


@app.route('/projetos')
def projetos():
    return render_template('projetos.html')


@app.route('/linkedin')
def linkedin():
    return render_template('linkedin.html')


if __name__ == '__main__':
    app.run(debug=True)