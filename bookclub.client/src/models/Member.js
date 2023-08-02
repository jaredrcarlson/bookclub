export class Member {
  constructor(data) {
    this.clubId = data.clubId
    this.createdAt = data.createdAt
    this.creatorId = data.creatorId
    this.profile = data.profile
    this.role = data.role
    this.updatedAt = data.updatedAt
  }
}