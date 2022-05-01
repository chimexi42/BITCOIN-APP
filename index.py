import datetime
import  pandas as pd
import numpy as np


class Users():


    raise_amount = 1.05


    def __init__(self,first,last, salary):
        self.first = first
        self.last = last
        self.salary= salary


    def percentage(self):
        return self.salary * 0.1


    def fullname(self):
        return'{} {}'.format(self.first, self.last).title()  


    def apply_raise(self):
        raised = int(self.salary * self.raise_amount)
        return '{:,}'.format(raised)



class Person(Users):
    def new(self):
        self.age= age
    
            
user1 = Users('chima', 'okoro', 20584774600)
user2 = Users('chidubem', 'chekwube', 50123000000)
user3 = Users('chineme', 'nwachukwu', 20000000)

new1= Person('ody', 'obinna', 243535366)

print('{:,}'.format(user1.percentage()))
print('{:,}'.format(user2.percentage()))
print(user1.fullname())
print(user3.apply_raise())



add = [1,2,4,5,6,7]

product = 1

for n in add:
    product *=n

print(product) 



class User():
    """gjsjsjerruufyfgygfryybvhwuvyyruyrwkkhvhabyuvbyyugwhen i am going to do many of that mehn """
    def __init__(self, full_name, birthday):
        self.name= full_name
        self.birthday= birthday

        name_pieces = full_name.split(" ")
        self.first_name= name_pieces[0]
        self.last_name= name_pieces[-1]

    def age(self):
        """return age in years"""
        today= datetime.date(2001, 5, 12)
        yyyy= int(self.birthday[0:4])
        mm= int(self.birthday[4:6])
        dd = int(self.birthday[6:8])
        dob = datetime.date(yyyy, mm, dd)
        age_in_days= (today-dob).days
                
        age_in_years = age_in_days/365
        print(dob)
        return int(age_in_years)
        

     
user = User("Dave Bowman", "19710315")
print(user.name)
print(user.first_name)
print(user.last_name)
print(user.age())


string = 'hello world I am Chima'
print(string.title().split(' '))


list1 = [23,34,67,22,43,123,45,]




d = {'Val':[2,4,6,7,8]}


df = pd.DataFrame(d)
df['New'] = int(100/25)

df['Sum']= df.apply(lambda x: x['New']/100  , axis= 1)

print(df)






















