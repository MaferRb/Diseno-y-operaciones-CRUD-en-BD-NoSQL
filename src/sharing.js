rs.initiate({
    _id: "activityReplSet",
    members: [
        { _id: 0, host: "localhost:27018" },
        { _id: 1, host: "localhost:27019" },
        { _id: 2, host: "localhost:27020" }
    ]
})

rs.initiate({
    _id: "activityShard",
    members: [
        { _id: 0, host: "localhost:27021" },
        { _id: 1, host: "localhost:27022" },
        { _id: 2, host: "localhost:27023" }
    ]
})
