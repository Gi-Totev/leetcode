class ListNode {
  /**
   * @param {Number} val
   * @param {ListNode} next
   */
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let result = new ListNode(0, null);
  let head = result;
  let carryOver = 0;
  let value = 0;

  while (l1 != null || l2 != null || value > 0) {
    if(l1 != null) {
      value += l1.val;
      l1 = l1.next;
    }

    if(l2 != null) {
      value += l2.val;
      l2 = l2.next;
    }

    if(value >= 10) {
      carryOver = Math.floor(value / 10);
      value = value % 10;
    }

    head.next = new ListNode(value, null);
    head = head.next;
    value = carryOver;
    carryOver = 0;
  }

  return result.next;
};

const l1 = new ListNode(1, new ListNode(8, null));
const l2 = new ListNode(0, null);

console.log(addTwoNumbers(l1, l2));
