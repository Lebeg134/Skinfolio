﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace SkinfolioBackend.Models
{
    [BsonIgnoreExtraElements]
    public class Skin
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = String.Empty;
        [BsonElement("name")]
        public string Name { get; set; } = String.Empty;
        [BsonElement("stattrak")]
        public bool IsStattrak { get; set; }
    }
}
