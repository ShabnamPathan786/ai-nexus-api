from fastapi import FastAPI

app=FastAPI(title="Rag Document Agent ")

@app.get("/")
def check_health():
    return {
        "status":"ok",
        "message":"Rag Agent is Running"
}


