from fastapi import FastAPI ,Path

app=FastAPI()

@app.get("/")
def root():
    return ["alice","bob","fab"]


students={
 1:{
     "name":"shannam" ,"age":10
     }
}

@app.get("/user/{user_id}")
def getstudent(user_id:int=Path(...,description="enter which id student u want to see",title="user_id",gt=0)):
    return students[user_id]


@app.get("/user")
def getuser(name:str):
    

