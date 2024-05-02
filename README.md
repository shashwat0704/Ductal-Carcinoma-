Install python and nodeJS and set the path 

Open terminal in vs code and execute following commands :
pip install numpy
pip install pandas
pip install matplotlib
pip install seaborn
pip install -U scikit-learn
pip install xgboost
pip install joblib
pip install Flask-Cors
pip install Flask


After installing all these run the ipynb file 
=> after running several files will be created 
   from them copy "xgboost_model.joblib" file

Now open ML-Deployment-Major-Project in vs code and paste this newly generated "xgboost_model.joblib" 
file by replacing old one having same name and copy its path by right clicking on that file in vs code and then paste the path in app.py file.

Then inside ML-Model-Major-Project there is a folder named templates, open it
1)inside templates there is a folder named FRONTEND, go to its directory
2)go to the terminal in vs code and write 'npm install' (without quotes)
3) wait for the installation to get complete
4) after installation run the app.py file.
5) go to the terminal again and write 'npm start' (without quotes)
6) web browser will automatically open and the project's front end will be visible
7) input numbers in the range 0.0 to 10.0 in every fields and click on submit



