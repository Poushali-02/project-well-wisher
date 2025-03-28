from flask import Flask, render_template, request, redirect, url_for, session
users = {}
app = Flask(__name__)
app.secret_key = 'your_secret_key_here'  # Replace with a strong secret key
#,template_folder='../templates',static_folder='static'
@app.route('/')
def main():
    print("Session Data:", session)  # Debugging step
    if 'username' not in session:
        print("No user in session, redirecting to signup...")  # Debugging
        return redirect(url_for('signup_page'))
    return render_template('index.html', username=session['username'])

@app.route('/signup', methods=['GET', 'POST'])
def signup_page():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']

        # Store user in database (for now, using a dictionary)
        users[username] = password
        session['username'] = username  # Store username in session

        return redirect(url_for('main'))  # Redirect to the main page after signup

    return render_template('signup.html')

@app.route('/games')
def games():
    return render_template('games.html')

@app.route('/talk')
def talk():
    return render_template('talk.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/logout')
def logout():
    session.pop('username', None)  # Remove username from session
    return render_template('logout.html')   # Redirect to signup page

if __name__ == '__main__':
    app.run(debug = True)