import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope=['https://spreadsheets.google.com/feeds']
creds = ServiceAccountCredentials.from_json_keyfile_name('client_server.json',scope)
client =gspread.authorize(creds)

sheet = client.open('Feedbacks').sheet1

obj = sheet.get_all_records()
print(obj)
