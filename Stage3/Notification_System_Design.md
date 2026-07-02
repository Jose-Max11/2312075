The given query is the slow bacuse the reason is the we select the all the columns in the notifcation schema and then the we use the Where and And operations and also the order by these are the thing take the high cost.

so we change this query into the add the index on the every column is to be safe yes this advice is effective. because out of the 50000 studnets 50000000 notifications if we fetch the particular user notifcation means its too long process.

because oe people hae lot of the notification o we use index is best to fetch and also the easy to fetch.

we use the query to easily find the all students whoe got the placment notication last 7 days.

if(notificationType == "Placement")
{
    notifcation.find()
}

using these query we exily find.

