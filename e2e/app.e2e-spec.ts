import { TodoAppPage } from './app.po';

describe('todo-app App', () => {
  let page: TodoAppPage;

  beforeEach(() => {
    page = new TodoAppPage();
  });

  it('should display Heading', () => {
    page.navigateTo();
    expect(page.getHeadingText()).toEqual('ToDo List');
  });

  it('should verify the count', () => {
    page.navigateTo();
    expect(page.getCountText()).toEqual('3');
  });

  it('should add an item to the list and verify the count', () =>{
    page.navigateTo();
    page.newTodo().then( function (done) {
      page.clickSubmit();
    });
    expect(page.getCountText()).toEqual('4');
  });

  it('should remove an item and verify the count', () =>{
    page.navigateTo();
    page.clickCompleted();
    page.confirmAlert();
    expect(page.getCountText()).toEqual('2');
  });

  it('should verify that the AddToDo box is empty after submitting', () =>{
    page.navigateTo();
    page.newTodo().then( function(done){
      page.clickSubmit();
    });
    expect(page.checkInputBox()).toBeUndefined();
  });

  it('should make sure that we can\'t submit a empty String', () => {
    page.navigateTo();
    var count = page.getCountText();
    page.clickSubmit();
    page.confirmAlert();
    expect(count==page.getCountText());
  });

  it('should test that the task is not deleted on hitting cancel at the confirm box',() =>{
    page.navigateTo();
    var count = page.getCountText();
    page.clickCompleted();
    page.rejectAlert();
    expect(count==page.getCountText());
  })
});
