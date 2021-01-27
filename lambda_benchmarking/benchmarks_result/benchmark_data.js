const benchmarkData = {
  "basic_features/char_backtracking": "1.12",
  "basic_features/char_backtracking_greddy_quantifier_max": "0.45",
  "basic_features/char_backtracking_greddy_quantifier_max_complex": "1.77",
  "basic_features/char_backtracking_greedy_quantifier_min": "0.58",
  "basic_features/char_backtracking_greedy_quantifier_min_and_max": "0.55",
  "basic_features/char_backtracking_greedy_quantifier_min_and_max_complex": "0.93",
  "basic_features/char_backtracking_greedy_quantifier_min_complex": "1.34",
  "basic_features/char_backtracking_lazy_quantifier_max": "1.14",
  "basic_features/char_backtracking_lazy_quantifier_max_complex": "2.61",
  "basic_features/char_backtracking_lazy_quantifier_min": "0.76",
  "basic_features/char_backtracking_lazy_quantifier_min_and_max": "0.76",
  "basic_features/char_backtracking_lazy_quantifier_min_and_max_complex": "1.23",
  "basic_features/char_backtracking_lazy_quantifier_min_complex": "3.21",
  "basic_features/char_class_any": "0.46",
  "basic_features/char_class_digit": "0.50",
  "basic_features/char_class_digit_negated": "0.39",
  "basic_features/char_class_space": "0.46",
  "basic_features/char_class_space_negated": "0.39",
  "basic_features/char_class_word": "0.40",
  "basic_features/char_class_word_negated": "0.47",
  "basic_features/char_disjunction": "0.67",
  "basic_features/char_non_greedy_backtracking": "0.97",
  "basic_features/char_non_greedy_min": "0.60",
  "basic_features/char_quantifier": "1.00",
  "basic_features/char_sets": "0.61",
  "basic_features/char_sets_ignoreCase": "0.74",
  "basic_features/char_sets_invert": "0.55",
  "basic_features/char_sets_quantifier": "1.01",
  "basic_features/dot_matchall": "0.43",
  "basic_features/end_anchor": "0.62",
  "basic_features/end_anchor_multiline": "0.80",
  "basic_features/end_anchor_optional": "1.22",
  "basic_features/group_backreference": "1.54",
  "basic_features/group_backtracking": "1.66",
  "basic_features/groups_disjunctions": "0.81",
  "basic_features/groups_disjunctions_backtracking": "1.05",
  "basic_features/groups_non_capturing": "0.78",
  "basic_features/groups_quantifiers": "0.79",
  "basic_features/groups_simple": "0.86",
  "basic_features/lookahead_negative": "0.64",
  "basic_features/lookahead_positive": "0.69",
  "basic_features/lookbehind_negative": "0.55",
  "basic_features/lookbehind_positive": "0.50",
  "basic_features/non_greedy_star_match": "0.88",
  "basic_features/non_word_boundry": "0.76",
  "basic_features/set_backtracking": "2.03",
  "basic_features/single_chars": "0.55",
  "basic_features/single_chars_ignoreCase": "0.63",
  "basic_features/start_anchor": "0.47",
  "basic_features/start_anchor_multiline": "0.72",
  "basic_features/start_anchor_optional": "0.95",
  "basic_features/unicode_4byte": "0.80",
  "basic_features/unicode_any": "0.59",
  "basic_features/unicode_feature": "0.78",
  "basic_features/unicode_lookbehind": "0.70",
  "basic_features/word_boundry": "0.79",
  "basic_features/zero_length_assertion_end_anchored": "0.42",
  "common_regex/alphanumeric_with_space": "0.85",
  "common_regex/alphanumeric_without_space": "0.76",
  "common_regex/date_day_first_num": "4.59",
  "common_regex/date_day_first_str": "5.53",
  "common_regex/date_year_first_dash": "1.22",
  "common_regex/email1": "2.23",
  "common_regex/email2": "2.38",
  "common_regex/email3": "2.43",
  "common_regex/html_tag": "0.54",
  "common_regex/ipv4": "4.07",
  "common_regex/ipv4_and_ipv6": "3.66",
  "common_regex/ipv6": "3.11",
  "common_regex/js_handler": "1.35",
  "common_regex/js_handler_with_element": "1.04",
  "common_regex/numbers_decimal": "0.62",
  "common_regex/numbers_negative_positive_decimal": "0.93",
  "common_regex/numbers_whole": "0.51",
  "common_regex/numbers_whole_and_decimal": "0.66",
  "common_regex/numbers_whole_decimal_fractions": "2.48",
  "common_regex/password_complex": "2.51",
  "common_regex/password_moderate": "2.29",
  "common_regex/phone_number": "5.80",
  "common_regex/search_duplicates": "3.49",
  "common_regex/slug": "0.84",
  "common_regex/time_0_12h_optional_zero_ampm": "1.35",
  "common_regex/time_1_12h_optional_zero": "0.06",
  "common_regex/time_2_24h_zero": "0.73",
  "common_regex/time_3_24h_optional_zero": "1.49",
  "common_regex/time_4_24h_with_seconds": "0.87",
  "common_regex/url_http": "2.55",
  "common_regex/url_protocol_optional": "2.69",
  "common_regex/username": "0.82",
  "etherpad/ep_ops": "1.34"
};