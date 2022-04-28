import webapp2
import os
import json
import urllib

from google.appengine.ext.webapp import template

class MainPage(webapp2.RequestHandler):
    def get(self):
        template_values = {}
        path = os.path.join(os.path.dirname(__file__), 'index.html') 
        return self.response.out.write(template.render(path,template_values))

    def post(self):
        # longitude = self.request.get("longitude")	
		# latitude = self.request.get("latitude")
		# url = "https://api.open-meteo.com/v1/forecast?latitude="+latitude+ "&longitude=" + longitude+ "&hourly=temperature_2m"
		# data = urllib.urlopen(url).read()
		# data = json.loads(data)
		# if(data['hourly']['temperature_2m'][0]):
		# 	temp = data['hourly']['temperature_2m'][0]
			
		# 	template_values = {
		# 			"temperature": temp
		# 	}
        city_name = self.request.get('zipCode')
        if not city_name.isalpha() :
            template_values = {
                "error":"Incorrect name"
            }
            path = os.path.join(os.path.dirname(__file__),'index.html')
            return self.response.out.write(template.render(path,template_values))

        api_key = "6fed8996a96c98b705eaa03c8befa332"
        base_url="https://api.openweathermap.org/data/2.5/weather?"
        url = base_url + "appid=" + api_key + "&q=" + city_name + "&units=metric"
        data = urllib.urlopen(url).read()
        data = json.loads(data)
        print(data)
        template_values = {
            "Weather_Description": data['weather'][0]['description'],
            "Temp_feels_like":data['main']['feels_like'],
            "humididty":data['main']['humidity'],
            "wind_speed":data["wind"]['speed'],
            "visibility":data["visibility"]
        }
        path = os.path.join(os.path.dirname(__file__), 'result.html')
        self.response.out.write(template.render(path, template_values))    

app = webapp2.WSGIApplication([('/',MainPage),],debug=True)