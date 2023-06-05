Feature: Add a new mail inboxe at Getnada

    Scenario: Bob add a new mail inboxe at Getnada
        Given Bob opens Getnada website
        When Bob tries to add his email with @getnada domain at getnada
        Then Bob sees his email added successfully under "Your Inboxe" section