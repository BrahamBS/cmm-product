# cmmapi v0.0.0



- [Actualite](#actualite)
	- [Create actualite](#create-actualite)
	- [Delete actualite](#delete-actualite)
	- [Retrieve actualite](#retrieve-actualite)
	- [Retrieve actualites](#retrieve-actualites)
	- [Update actualite](#update-actualite)
	
- [Auth](#auth)
	- [Authenticate](#authenticate)
	
- [Intervention](#intervention)
	- [Create intervention](#create-intervention)
	- [Delete intervention](#delete-intervention)
	- [Retrieve intervention](#retrieve-intervention)
	- [Retrieve interventions](#retrieve-interventions)
	- [Update intervention](#update-intervention)
	
- [Projet](#projet)
	- [Create projet](#create-projet)
	- [Delete projet](#delete-projet)
	- [Retrieve projet](#retrieve-projet)
	- [Retrieve projets](#retrieve-projets)
	- [Update projet](#update-projet)
	
- [Suiviprestation](#suiviprestation)
	- [Create suiviprestation](#create-suiviprestation)
	- [Delete suiviprestation](#delete-suiviprestation)
	- [Retrieve suiviprestation](#retrieve-suiviprestation)
	- [Retrieve suiviprestations](#retrieve-suiviprestations)
	- [Update suiviprestation](#update-suiviprestation)
	
- [User](#user)
	- [Create user](#create-user)
	- [Delete user](#delete-user)
	- [Retrieve current user](#retrieve-current-user)
	- [Retrieve user](#retrieve-user)
	- [Retrieve users](#retrieve-users)
	- [Update password](#update-password)
	- [Update user](#update-user)
	


# Actualite

## Create actualite



	POST /actualites


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| titre			| 			|  <p>Actualite's titre.</p>							|
| photoUrl			| 			|  <p>Actualite's photoUrl.</p>							|
| contenue			| 			|  <p>Actualite's contenue.</p>							|
| isFeatured			| 			|  <p>Actualite's isFeatured.</p>							|

## Delete actualite



	DELETE /actualites/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve actualite



	GET /actualites/:id


## Retrieve actualites



	GET /actualites


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update actualite



	PUT /actualites/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| titre			| 			|  <p>Actualite's titre.</p>							|
| photoUrl			| 			|  <p>Actualite's photoUrl.</p>							|
| contenue			| 			|  <p>Actualite's contenue.</p>							|
| isFeatured			| 			|  <p>Actualite's isFeatured.</p>							|

# Auth

## Authenticate



	POST /auth

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|

# Intervention

## Create intervention



	POST /interventions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| titre			| 			|  <p>Intervention's titre.</p>							|
| dateDebut			| 			|  <p>Intervention's dateDebut.</p>							|
| dateFin			| 			|  <p>Intervention's dateFin.</p>							|
| description			| 			|  <p>Intervention's description.</p>							|
| beneficiaires			| 			|  <p>Intervention's beneficiaires.</p>							|
| prestataires			| 			|  <p>Intervention's prestataires.</p>							|

## Delete intervention



	DELETE /interventions/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve intervention



	GET /interventions/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve interventions



	GET /interventions


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update intervention



	PUT /interventions/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| titre			| 			|  <p>Intervention's titre.</p>							|
| dateDebut			| 			|  <p>Intervention's dateDebut.</p>							|
| dateFin			| 			|  <p>Intervention's dateFin.</p>							|
| description			| 			|  <p>Intervention's description.</p>							|
| beneficiaires			| 			|  <p>Intervention's beneficiaires.</p>							|
| prestataires			| 			|  <p>Intervention's prestataires.</p>							|

# Projet

## Create projet



	POST /projets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| titre			| 			|  <p>Projet's titre.</p>							|
| description			| 			|  <p>Projet's description.</p>							|
| photoUrl			| 			|  <p>Projet's photoUrl.</p>							|
| dateDebut			| 			|  <p>Projet's dateDebut.</p>							|
| dateFin			| 			|  <p>Projet's dateFin.</p>							|
| emplacement			| 			|  <p>Projet's emplacement.</p>							|
| nature			| 			|  <p>Projet's nature.</p>							|
| suiveurs			| 			|  <p>Projet's suiveurs.</p>							|
| prestataires			| 			|  <p>Projet's prestataires.</p>							|

## Delete projet



	DELETE /projets/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve projet



	GET /projets/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve projets



	GET /projets


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update projet



	PUT /projets/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| titre			| 			|  <p>Projet's titre.</p>							|
| description			| 			|  <p>Projet's description.</p>							|
| photoUrl			| 			|  <p>Projet's photoUrl.</p>							|
| dateDebut			| 			|  <p>Projet's dateDebut.</p>							|
| dateFin			| 			|  <p>Projet's dateFin.</p>							|
| emplacement			| 			|  <p>Projet's emplacement.</p>							|
| nature			| 			|  <p>Projet's nature.</p>							|
| suiveurs			| 			|  <p>Projet's suiveurs.</p>							|
| prestataires			| 			|  <p>Projet's prestataires.</p>							|

# Suiviprestation

## Create suiviprestation



	POST /suiviprestations


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| prestataire			| 			|  <p>Suiviprestation's prestataire.</p>							|
| dateFacture			| 			|  <p>Suiviprestation's dateFacture.</p>							|
| objetFacture			| 			|  <p>Suiviprestation's objetFacture.</p>							|
| etat			| 			|  <p>Suiviprestation's etat.</p>							|
| observation			| 			|  <p>Suiviprestation's observation.</p>							|

## Delete suiviprestation



	DELETE /suiviprestations/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve suiviprestation



	GET /suiviprestations/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|

## Retrieve suiviprestations



	GET /suiviprestations


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update suiviprestation



	PUT /suiviprestations/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>admin access token.</p>							|
| prestataire			| 			|  <p>Suiviprestation's prestataire.</p>							|
| dateFacture			| 			|  <p>Suiviprestation's dateFacture.</p>							|
| objetFacture			| 			|  <p>Suiviprestation's objetFacture.</p>							|
| etat			| 			|  <p>Suiviprestation's etat.</p>							|
| observation			| 			|  <p>Suiviprestation's observation.</p>							|

# User

## Create user



	POST /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>Master access_token.</p>							|
| email			| String			|  <p>User's email.</p>							|
| password			| String			|  <p>User's password.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|
| role			| String			| **optional** <p>User's role.</p>							|

## Delete user



	DELETE /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve current user



	GET /users/me


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|

## Retrieve user



	GET /users/:id


## Retrieve users



	GET /users


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update password



	PUT /users/:id/password

### Headers

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| Authorization			| String			|  <p>Basic authorization with email and password.</p>							|

### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>User's new password.</p>							|

## Update user



	PUT /users/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| access_token			| String			|  <p>User access_token.</p>							|
| name			| String			| **optional** <p>User's name.</p>							|
| picture			| String			| **optional** <p>User's picture.</p>							|


