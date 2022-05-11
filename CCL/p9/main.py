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
        showname = self.request.get('zipCode')
        if not showname.isalpha() :
            template_values = {
                "error":"Incorrect name"
            }
            path = os.path.join(os.path.dirname(__file__),'index.html')
            return self.response.out.write(template.render(path,template_values))

        base_url="https://api.tvmaze.com/search/shows?q="
        url = base_url + showname 
        data = urllib.urlopen(url).read()
        data = json.loads(data)
        #print(data)
        template_values = {
            "name": [data[0]['show']['name'],data[1]['show']['name'],data[2]['show']['name']] or "not available",
            "type":[data[0]['show']['type'],data[1]['show']['type'],data[2]['show']['type']] or "not available",
            "language":[data[0]['show']['language'],data[1]['show']['language'],data[2]['show']['language']] or "not available",
            "officialSite":[data[0]["show"]['officialSite'],data[1]["show"]['officialSite'],data[2]["show"]['officialSite']] or "not available",
            "schedule":[data[0]["show"]['schedule']['time'],data[1]["show"]['schedule']['time'],data[2]["show"]['schedule']['time']] or "not available"
        }
        print(template_values)
        path = os.path.join(os.path.dirname(__file__), 'result.html')
        self.response.out.write(template.render(path, template_values))    

app = webapp2.WSGIApplication([('/',MainPage),],debug=True)