const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');
const NoteSchema = require('./NoteSchema.js');

const mongodb = new MongoMemoryServer();

describe('Note model', () => {
  beforeAll(() => {
    return mongodb.getUri()
      .then(uri => mongoose.connect(uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true
      }));
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(() => {
    return mongoose.connection.close()
      .then(() => mongodb.stop());
  });

  it('creates a note', () => {
    return NoteSchema.execute({ 
      type: 'add',
      payload: 'ahlan wa sahlan'
    })
    .then(note => {
      expect(note.toJSON()).toEqual({
        text: 'ahlan wa sahlan',
        _id: expect.anything(),
        __v: 0
      })
    })
  })

  it('can list all notes', async() => {
   
    await NoteSchema.execute({
      type: 'add',
      payload: 'wuzzup'
    });
    await NoteSchema.execute({
      type: 'add',
      payload: 'bonjour'
    });

    return NoteSchema.execute({type: 'list', payload: true})
    .then(notes => {
      expect(notes.map(note => note.toJSON())).toEqual(
        [
          {
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
          },
          {
            _id: expect.anything(),
            text: expect.any(String),
            __v: 0
            }
        ]
      );
    })
  })

  it('can delete a note by id', async() => {
   
    await NoteSchema.execute({
      type: 'add',
      payload: 'wuzzup'
    });
    await NoteSchema.execute({
      type: 'add',
      payload: 'bonjour'
    });

    return NoteSchema.execute({type: 'delete', payload: true})
    .then(notes => {
      expect(notes.map(note => note.toJSON())).toEqual(
        [
          {
          _id: expect.anything(),
          text: expect.any(String),
          __v: 0
          },
          {
            _id: expect.anything(),
            text: expect.any(String),
            __v: 0
            }
        ]
      );
    })
})
})

