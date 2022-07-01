const {MongoClient} = require('mongodb');
async function main(){
    const uri = "mongodb://localhost:27017/demo-db";

    const client = new MongoClient(uri);
    try{
        await client.connect();
        await listDatabases(client);
        await deleteListingsScrapedBeforeDate(client,new Date("2019-02-15"));
    }
    catch(err){
        throw err;
    } finally {
        await client.close();
    }
}


main().catch(console.error);
// CREATE OPERATIONS
async function createMultipleListings(client, newListings){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);
    console.log(`${result.insertedCount} new listings created with the following ids: `);
    console.log(result.insertedIds);
}   

async function createListing(client, newListing){
   const result = await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing inserted with the following id: ${result.insertedId}`);
}
async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases: ");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}
// READ OPERATIONS
async function findOneListingByName(client, nameOfListing){
   const result = await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name: nameOfListing});

    if (result) {
        console.log(`Found a listing with name: ${nameOfListing}`);
        console.log(result);
    }
    else{
        console.log(`No listings found with the name: ${nameOfListing}`);
    }
}
async function findListingWithMinimumBedroomsBathroomsAndMostRecentReviews(client, {
    minimumNumberofBedrooms = 0,
    minimumNumberofBathrooms = 0,
    maximumNumberofResults= Number.MAX_SAFE_INTEGER 
}={})
{
    const cursor = await client.db("sample_airbnb").collection("listingsAndReviews").find({
        bedrooms: { $gte: minimumNumberofBedrooms}, 
        bathrooms: { $gte: minimumNumberofBathrooms},
    }).sort({last_review: -1})
    .limit(maximumNumberofResults);

     const results = await cursor.toArray();

     if (results.length > 0) {
        console.log(`Found listing(s) with at least ${minimumNumberofBedrooms} bedrooms and ${minimumNumberofBathrooms} bathrooms:`);
        results.forEach((result, i) => {
            date = new Date(result.last_review).toDateString();

            console.log();
            console.log(`${i + 1}. name: ${result.name}`);
            console.log(`   _id: ${result._id}`);
            console.log(`   bedrooms: ${result.bedrooms}`);
            console.log(`   bathrooms: ${result.bathrooms}`);
            console.log(`   most recent review date: ${new Date(result.last_review).toDateString()}`);
        });
    } else {
        console.log(`No listings found with at least ${minimumNumberofBedrooms} bedrooms and ${minimumNumberofBathrooms} bathrooms`);
    }
}

// UPDATING OPERATIONS

async function updateListingByName(client, nameOfListing, updatedListing){
    const result = await client.db("sample_airbnb").collection("listingAndReviews").updateOne({
        name: nameOfListing},{$set: updatedListing});

        console.log(`${result.matchedCount} documents(s) matched the Query Criteria`);
        console.log(`${result.modifiedCount} documents was/were updated.`);

}
// Upsert is cOOl
async function upsertListingByName(client, nameOfListing, updatedListing){
    const result = await client.db("sample_airbnb").collection("listingAndReviews").updateOne({
        name: nameOfListing},{$set: updatedListing}, {upsert: true});
        
        console.log(`${result.matchedCount} documents matched the criteria`);
        if(result.upsertedCount > 0){
            console.log(`One document was inserted with the id ${result.upsertedCount}`);
        }else{
            console.log(`${result.modifiedCount} documents was/were updated`);
        }
}

async function updateAllListingsToHavePropertyType(client){
    const result = await client.db("sample_airbnb").collection("listingAndReviews")
    .updateMany({property_type: {$exists: false}},{ $set: {property_type: "Unknown"}});

        console.log(`${result.matchedCount} documents matched the Query Criteria`);
        console.log(`${result.modifiedCount} documents was/were updated`);
    }
// DELETE OPERATIONS
async function deleteListingByName(client, nameOfListing){
    const result = await client.db("sample_airbnb").collection("listingAndReviews")
    .deleteOne({name: nameOfListing});

    console.log(`${result.deletedCount} documents was/were deleted`);
}

async function deleteListingsScrapedBeforeDate(client, date){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
    .deleteMany({"last_scraped": {$lt: date}})

    console.log(`${result.deletedCount} document(s) was/were deleted before Date: ${date}`);
}