from flask import Flask, render_template, request, redirect, url_for
import sqlite3


app = Flask(__name__)







def init_db():
  conn = sqlite3.connect('app.db')
  cursor = conn.cursor()
  
  cursor.execute('''CREATE TABLE IF NOT EXISTS 
  login_info
  (username TEXT NOT NULL PRIMARY KEY,
   name TEXT NOT NULL, 
   email TEXT NOT NULL UNIQUE);''')

  cursor.execute('''CREATE TABLE IF NOT EXISTS 
  attribute
  (username TEXT NOT NULL PRIMARY KEY,
   height REAL NOT NULL,
   weight REAL NOT NULL,
   bmi REAL NOT NULL);''')
  conn.commit()
  conn.close()




@app.route('/', methods = ['GET', 'POST'])
def login():
  if request.method == 'POST':
    username = request.form['username']
    password = request.form['password']
    if len(username) != 0 and len(password) != 0:
      return redirect (url_for('home', username = username))
  return render_template('index.html')
    

    
  
  return render_template('index.html')

@app.route('/signup', methods = ['GET', 'POST'])
def signup():
  conn = sqlite3.connect('app.db')
  cursor = conn.cursor()
  if request.method == 'POST':
    username = request.form['username']
    name = request.form['name']
    email = request.form['email']
    
    cursor.execute('''INSERT INTO login_info
  (username, name, email) VALUES
  (?, ?, ?)''', (username , name, email)) #Insert Username, name, email into table only
    conn.commit()
    conn.close()
    return redirect (url_for('login'))
  return render_template('signup.html')
    



@app.route('/home/<username>', methods = ['GET', 'POST'])
def home(username):
  conn = sqlite3.connect('app.db')
  cursor = conn.cursor()
  if request.method == 'POST':
    height = request.form['height']
    weight = request.form['weight']
    bmi = float(weight) / (float(height) ** 2)

  
    cursor.execute('''INSERT INTO attribute
  (username, height, weight, bmi) VALUES
  (?, ?, ?, ?)''', (username, height, weight, round(bmi, 1)))
    conn.commit() #Insert into attribute username, height, weight, bmi 


  
  cursor.execute('''SELECT * FROM attribute 
  WHERE bmi < 18.5;''')
  under = cursor.fetchall() #Select data from unhealthy bmi
    
  cursor.execute('''SELECT * FROM attribute 
  WHERE bmi > 24.9 AND bmi < 29.9;''')
  over = cursor.fetchall()


  cursor.execute('''SELECT * FROM attribute 
  WHERE bmi >= 18.5 AND bmi <= 24.9;''')
  healthy = cursor.fetchall()

  cursor.execute('''SELECT * FROM attribute 
  WHERE bmi >= 29.9;''')
  obese = cursor.fetchall()
  

  conn.close()
  return render_template('data.html', over = over, under = under, healthy = healthy, obese = obese )


@app.route('/bot')
def bot():
  
  
  return render_template('bot.html')

@app.route('/forgotpassword', methods =['GET','POST'])
def forgotpassword():
  return render_template('forgotpassword.html')













if __name__ == '__main__':
  # app.run(debug=True)
  init_db()

app.run(host='0.0.0.0', port=81)



# if __name__ == "__main__":
#   app.run(host='0.0.0.0', port=81)

