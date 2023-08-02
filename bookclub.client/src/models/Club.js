export class Club {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.coverImg = data.coverImg
    this.name = data.name
    this.description = data.description
    this.createdAt = new Date(data.createdAt).toLocaleString()
    this.updatedAt = new Date(data.updatedAt).toLocaleString()
    this.memberCount = data.memberCount
  }
}