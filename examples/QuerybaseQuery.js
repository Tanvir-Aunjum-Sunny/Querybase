/// <reference path="../typings/firebase/firebase.d.ts" />
var QuerybaseQuery = (function () {
    function QuerybaseQuery(query) {
        this.query = query;
    }
    QuerybaseQuery.prototype.lessThan = function (value) {
        return new QuerybaseQuery(this.query.endAt(value));
    };
    QuerybaseQuery.prototype.greaterThan = function (value) {
        return this.query.startAt(value);
    };
    QuerybaseQuery.prototype.equalTo = function (value) {
        return this.query.equalTo(value);
    };
    return QuerybaseQuery;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuerybaseQuery;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlF1ZXJ5YmFzZVF1ZXJ5LnRzIl0sIm5hbWVzIjpbIlF1ZXJ5YmFzZVF1ZXJ5IiwiUXVlcnliYXNlUXVlcnkuY29uc3RydWN0b3IiLCJRdWVyeWJhc2VRdWVyeS5sZXNzVGhhbiIsIlF1ZXJ5YmFzZVF1ZXJ5LmdyZWF0ZXJUaGFuIiwiUXVlcnliYXNlUXVlcnkuZXF1YWxUbyJdLCJtYXBwaW5ncyI6IkFBQUEsMERBQTBEO0FBRTFEO0lBR0VBLHdCQUFZQSxLQUFvQkE7UUFDOUJDLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUNBO0lBQ3JCQSxDQUFDQTtJQUVERCxpQ0FBUUEsR0FBUkEsVUFBU0EsS0FBVUE7UUFDakJFLE1BQU1BLENBQUNBLElBQUlBLGNBQWNBLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBO0lBQ3JEQSxDQUFDQTtJQUVERixvQ0FBV0EsR0FBWEEsVUFBWUEsS0FBVUE7UUFDcEJHLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUVESCxnQ0FBT0EsR0FBUEEsVUFBUUEsS0FBVUE7UUFDaEJJLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO0lBQ25DQSxDQUFDQTtJQUVISixxQkFBQ0E7QUFBREEsQ0FuQkEsQUFtQkNBLElBQUE7QUFuQkQ7Z0NBbUJDLENBQUEiLCJmaWxlIjoiUXVlcnliYXNlUXVlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9maXJlYmFzZS9maXJlYmFzZS5kLnRzXCIgLz5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlcnliYXNlUXVlcnkge1xuICBxdWVyeTogRmlyZWJhc2VRdWVyeTtcbiAgXG4gIGNvbnN0cnVjdG9yKHF1ZXJ5OiBGaXJlYmFzZVF1ZXJ5KSB7XG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xuICB9XG4gIFxuICBsZXNzVGhhbih2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIG5ldyBRdWVyeWJhc2VRdWVyeSh0aGlzLnF1ZXJ5LmVuZEF0KHZhbHVlKSk7XG4gIH1cbiAgXG4gIGdyZWF0ZXJUaGFuKHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeS5zdGFydEF0KHZhbHVlKTtcbiAgfVxuICBcbiAgZXF1YWxUbyh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMucXVlcnkuZXF1YWxUbyh2YWx1ZSk7XG4gIH1cbiAgXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9