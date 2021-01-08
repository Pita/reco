const benchmarkData = {
  "basic_features/char_backtracking": "1.05",
  "basic_features/char_backtracking_greddy_quantifier_max": "0.53",
  "basic_features/char_backtracking_greddy_quantifier_max_complex": "1.50",
  "basic_features/char_backtracking_greedy_quantifier_min": "0.58",
  "basic_features/char_backtracking_greedy_quantifier_min_and_max": "0.56",
  "basic_features/char_backtracking_greedy_quantifier_min_and_max_complex": "2.21",
  "basic_features/char_backtracking_greedy_quantifier_min_complex": "2.62",
  "basic_features/char_backtracking_lazy_quantifier_max": "1.01",
  "basic_features/char_backtracking_lazy_quantifier_max_complex": "2.50",
  "basic_features/char_backtracking_lazy_quantifier_min": "0.77",
  "basic_features/char_backtracking_lazy_quantifier_min_and_max": "1.00",
  "basic_features/char_backtracking_lazy_quantifier_min_and_max_complex": "1.51",
  "basic_features/char_backtracking_lazy_quantifier_min_complex": "2.68",
  "basic_features/char_class_any": "0.47",
  "basic_features/char_class_digit": "0.51",
  "basic_features/char_class_digit_negated": "0.39",
  "basic_features/char_class_space": "0.48",
  "basic_features/char_class_space_negated": "0.43",
  "basic_features/char_class_word": "0.42",
  "basic_features/char_class_word_negated": "0.48",
  "basic_features/char_disjunction": "0.68",
  "basic_features/char_non_greedy_backtracking": "0.83",
  "basic_features/char_non_greedy_min": "0.62",
  "basic_features/char_quantifier": "0.92",
  "basic_features/char_sets": "0.68",
  "basic_features/char_sets_ignoreCase": "0.72",
  "basic_features/char_sets_invert": "0.58",
  "basic_features/char_sets_quantifier": "1.02",
  "basic_features/dot_matchall": "0.45",
  "basic_features/end_anchor": "0.57",
  "basic_features/end_anchor_multiline": "0.86",
  "basic_features/end_anchor_optional": "1.30",
  "basic_features/group_backreference": "1.48",
  "basic_features/group_backtracking": "1.25",
  "basic_features/groups_disjunctions": "1.03",
  "basic_features/groups_disjunctions_backtracking": "1.18",
  "basic_features/groups_non_capturing": "0.90",
  "basic_features/groups_quantifiers": "0.91",
  "basic_features/groups_simple": "0.75",
  "basic_features/lookahead_negative": "0.68",
  "basic_features/lookahead_positive": "0.70",
  "basic_features/lookbehind_negative": "0.55",
  "basic_features/lookbehind_positive": "0.45",
  "basic_features/non_greedy_star_match": "0.94",
  "basic_features/non_word_boundry": "0.81",
  "basic_features/set_backtracking": "1.51",
  "basic_features/single_chars": "0.53",
  "basic_features/single_chars_ignoreCase": "0.66",
  "basic_features/start_anchor": "0.56",
  "basic_features/start_anchor_multiline": "0.71",
  "basic_features/start_anchor_optional": "1.24",
  "basic_features/unicode_4byte": "0.81",
  "basic_features/unicode_any": "0.60",
  "basic_features/unicode_feature": "0.83",
  "basic_features/unicode_lookbehind": "0.72",
  "basic_features/word_boundry": "0.82",
  "basic_features/zero_length_assertion_end_anchored": "0.42",
  "common_regex/alphanumeric_with_space": "0.93",
  "common_regex/alphanumeric_without_space": "0.79",
  "common_regex/date_day_first_num": "6.14",
  "common_regex/date_day_first_str": "8.44",
  "common_regex/date_year_first_dash": "2.05",
  "common_regex/email1": "1.92",
  "common_regex/email2": "1.90",
  "common_regex/email3": "2.12",
  "common_regex/html_tag": "0.52",
  "common_regex/ipv4": "2.63",
  "common_regex/ipv4_and_ipv6": "4.02",
  "common_regex/ipv6": "4.05",
  "common_regex/js_handler": "1.39",
  "common_regex/js_handler_with_element": "0.87",
  "common_regex/numbers_decimal": "0.61",
  "common_regex/numbers_negative_positive_decimal": "0.98",
  "common_regex/numbers_whole": "0.52",
  "common_regex/numbers_whole_and_decimal": "0.71",
  "common_regex/numbers_whole_decimal_fractions": "1.40",
  "common_regex/password_complex": "2.52",
  "common_regex/password_moderate": "3.01",
  "common_regex/phone_number": "4.81",
  "common_regex/search_duplicates": "3.69",
  "common_regex/slug": "0.87",
  "common_regex/time_0_12h_optional_zero_ampm": "1.22",
  "common_regex/time_1_12h_optional_zero": "0.07",
  "common_regex/time_2_24h_zero": "1.17",
  "common_regex/time_3_24h_optional_zero": "1.65",
  "common_regex/time_4_24h_with_seconds": "0.85",
  "common_regex/url_http": "2.36",
  "common_regex/url_protocol_optional": "3.58",
  "common_regex/username": "0.83",
  "etherpad/ep_ops": "1.59"
};